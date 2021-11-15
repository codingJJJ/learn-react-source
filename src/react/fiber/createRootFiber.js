import { HOST_TAG } from '../reactWorkTags'
import FiberNode from './fiberNode'

const createRootFiber = (container) => {
    const rootFiber = new FiberNode(HOST_TAG)
}

export default createRootFiber