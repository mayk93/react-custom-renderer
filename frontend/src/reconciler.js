import createReconciler from 'react-reconciler';
import {unstable_scheduleCallback, unstable_cancelCallback} from 'scheduler';

const reconciler = createReconciler({
    schedulePassiveEffects: unstable_scheduleCallback,
    cancelPassiveEffects: unstable_cancelCallback,
    now: Date.now,
    supportsMutation: true,
    getRootHostContext: () => {
    },
    getChildHostContext: () => {
    },
    shouldSetTextContent: () => false,
    prepareForCommit: () => {
    },
    resetAfterCommit: () => {
    },
    finalizeInitialChildren: () => {
    },
    getPublicInstance: instance => instance,
    createTextInstance: text => {
        const textInstance = document.createTextNode(text);
        return textInstance;
    },
    createInstance: type => {
        const instance = document.createElement(type);
        return instance;
    },
    appendInitialChild: (parent, child) => {
        parent.appendChild(child)
    },
    appendChildToContainer: (parent, child) => {
        parent.appendChild(child)
    },
});

export default reconciler;
