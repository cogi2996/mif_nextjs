'use client'
export const convertDeltaToHtml = (delta) => {
    if (typeof window !== 'undefined') {
        const Quill = require('quill').default;
        const quill = new Quill(document.createElement('div'));
        quill.setContents(delta);
        return quill.root.innerHTML;
    } else {
        return '';
    }
}