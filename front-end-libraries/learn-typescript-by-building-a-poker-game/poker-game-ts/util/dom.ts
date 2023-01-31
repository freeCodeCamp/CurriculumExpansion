// querySelector applies to both HTMLElement (e.g. p tag) and HTMLInputElement (e.g. input tag), hence the &
export const $ = (query: string): HTMLElement & HTMLInputElement => document.querySelector(query);
export const $all = (query: string): NodeListOf<Element> => document.querySelectorAll(query);

/**
 * @function setContent
 * @desc Update the content (innerHTML) of each element with `id`
 * @param obj - The id of an element, and its content to be set
 */
export const setContent = obj => {
    for (let id in obj) {
        $(`#${id}`).innerHTML = obj[id];
    }
};

/**
 * @function setAttr
 * @desc Update the value(s) for the attribute(s) within the element of ${id}
 * @param {string} id - The id of a DOM element
 * @param ...pairs - Rest of the parameter, which are pairs of the element attributes and their value to be set
 */
export const setAttr = ({ id, ...pairs }) => {
    let ref = $(`#${id}`);
    for (let attr in pairs) {
        if (attr === 'style') {
            let styleObj = pairs.style;
            for (let styleAttr in styleObj) {
                ref.style[styleAttr] = styleObj[styleAttr];
            }
        } else {
            ref[attr] = pairs[attr];
        }
    }
};

/**
 * @function hide
 * @desc Hide element of id
 * @param {string} id - The id of an element that should be hidden
 */
export const hide = (id: string) => {
    setAttr({
        id,
        style: {
            display: 'none'
        }
    });
};

/**
 * @function hideAll
 * @desc Hide all elements based on the id list passed in
 * @param {...string[]} idList - The id(s) of the element(s) that should be hidden
 */
export const hideAll = (...idList: string[]) => {
    for (let i = 0; i < idList.length; i++) {
        hide(idList[i]);
    }
};

/**
 * @function show
 * @desc Show element of id
 * @param {string} id - The id of an element that should be displayed
 *     If the id is ending with 'container', set `display` to 'flex'
 */
export const show = (id: string) => {
    setAttr({
        id,
        style: {
            display: /container$/.test(id) ? 'flex' : 'block'
        }
    });
};

/**
 * @function showAll
 * @desc Show all elements based on the id list passed in
 * @param {...string[]} idList - The id(s) of the element(s) that should be hidden
 */
export const showAll = (...idList: string[]) => {
    for (let i = 0; i < idList.length; i++) {
        show(idList[i]);
    }
};
