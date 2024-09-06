'use client';
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { parseHtmlWithClasses } from '@/lib/utils.js'

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

export default function TextEditor({ setValue, value }) {

    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            [{ size: ['normal', 'small'] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            [{ align: [] }],
            [{ color: [] }],
        ],
    };

    const quillFormats = [
        'header',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
        'align',
        'color',
        'code-block',
    ];

    const handleEditorChange = (content, delta, source, editor) => {
        // content: nội dung HTML
        // delta: nội dung dưới dạng Delta
        // source: nguồn gốc thay đổi (user hoặc api)
        // editor: instance của Quill editor

        const deltaContent = editor.getContents();
        setValue(deltaContent)
    };

    return (
        <div>
            <div className="h-full w-full flex mb-8">
                <QuillEditor
                    value={value}
                    onChange={handleEditorChange}
                    modules={quillModules}
                    formats={quillFormats}
                    className='w-full h-[40vh]'
                />
            </div>
        </div>
    )
}




// import parse from 'html-react-parser'



// const options = {
//     replace: parseHtmlWithClasses,
// };

{/* <div className="mt-8 bg-gray-100 p-4 rounded-lg max-w-screen-xl">
    <div dangerouslySetInnerHTML={{ __html: content }} />
    <div className='max-w-screen-xl'>
        {content}
    </div>
    <div>
        {parse(content, options)}
    </div>
</div> */}