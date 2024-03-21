import { useCurrentEditor } from '@tiptap/react'
import React from 'react'

const EditorJsonPrev = () => {

    const {editor} =  useCurrentEditor()

  return (
    <prev>
        {JSON.stringify(editor.getJSON(), null, 2)}
    </prev>
  )
}

export default EditorJsonPrev