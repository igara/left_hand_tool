/* eslint-disable no-undef */
export const supportsChildren = (
  node: SceneNode,
): node is FrameNode | ComponentNode | InstanceNode | BooleanOperationNode => {
  if (!node) return false;

  return (
    node.type === 'FRAME' ||
    node.type === 'GROUP' ||
    node.type === 'COMPONENT' ||
    node.type === 'INSTANCE' ||
    node.type === 'BOOLEAN_OPERATION'
  );
};

export const generateTagAndStyleBySceneNode = (sceneNode: SceneNode) => {
  if (supportsChildren(sceneNode)) {
    sceneNode.children.forEach((node) => {
      generateTagAndStyleBySceneNode(node);
      console.log(node);
    });
  }
};

export const generateTagAndStyleBySelectedNode = () => {
  const selection = figma.currentPage.selection;
  selection.forEach((node) => {
    if (supportsChildren(node)) {
      generateTagAndStyleBySceneNode(node);
    }
  });

  return selection;
};

const script = document.getElementById('web_accessible_resource_figma');

const contentScriptFigmaEvent = new CustomEvent('content_script_figma_event', {
  detail: null,
});

script?.addEventListener('web_accessible_resource_figma_event', () => {
  console.log('web_accessible_resource_figma_event');
  const selection = generateTagAndStyleBySelectedNode();
  console.log(selection);
  script.dispatchEvent(contentScriptFigmaEvent);
});
