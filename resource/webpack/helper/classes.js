export const addClass = (dom, targetClass)=>{
  let arrClassName = getClass(dom);

  if (arrClassName.indexOf(targetClass) === -1) {
    arrClassName.push(targetClass);
    dom.className = arrClassName.join(' ');
  }
};

export const removeClass = (dom, targetClass)=>{
  const removeAction = (dom ,targetClass)=>{
    let arrClassName = getClass(dom);

    const index = arrClassName.indexOf(targetClass);

    if (index !== -1) {
      arrClassName.splice(index, 1);
      dom.className = arrClassName.join(' ');
    }
  };

  if (targetClass instanceof RegExp) {
    let arrClassName = getClass(dom);
    let targets = [];

    arrClassName.forEach((className)=>{
      if (targetClass.test(className)) {
        targets.push(className);
      }
    });

    targets.forEach((target)=>{
      removeAction(dom, target);
    })
  }
  else {
    removeAction(dom, targetClass);
  }
}

export const getClass = (dom)=>{
  let className = dom.className;
  return className.replace(/\s+/g, ' ').split(' ');
};

export const hasClass = (dom, targetClass)=>{
  let arrClassName = getClass(dom);
  return (arrClassName.indexOf(targetClass) !== -1);
};

export const toggleClass = (dom, targetClass)=>{
  let arrClassName = getClass(dom);

  if (arrClassName.indexOf(targetClass) !== -1) {
    removeClass(dom, targetClass);
  }
  else {
    addClass(dom, targetClass);
  }
};