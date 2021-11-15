const isPropsKey = (key) => {
    return key !== "className" && key !== "key";
}

const createElement = (tag, config, ...children) => {
    const props = {}
    for(let key in config) {
        if(isPropsKey(key)){
            props[key] = config[key]
        }
    }

    const childrenLenth = children.length;

    if(childrenLenth === 1) {
        props.children = children[0]
    }else if (childrenLenth > 1) {
        const childrenArr = [];
        for(let i = 0; i < childrenLenth; i ++){
            childrenArr.push(children[i])
        }
        props.children = childrenArr
    }

    return {
        $$typeof: Symbol("react.Element"),
        key: props.key,
        type: tag,
        props
    }
}

export default createElement;