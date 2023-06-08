<template>
   <!-- <div v-if="editor" class="flex items-center flex-wrap gap-2 bg-gray-50 p-2 rounded-t-lg border border-b-0 border-gray-200">
         <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().toggleBold().run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('bold') }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M14 36V8h11.4q3.3 0 5.725 2.1t2.425 5.3q0 1.9-1.05 3.5t-2.8 2.45v.3q2.15.7 3.475 2.5 1.325 1.8 1.325 4.05 0 3.4-2.625 5.6Q29.25 36 25.75 36Zm4.3-16.15h6.8q1.75 0 3.025-1.15t1.275-2.9q0-1.75-1.275-2.925Q26.85 11.7 25.1 11.7h-6.8Zm0 12.35h7.2q1.9 0 3.3-1.25t1.4-3.15q0-1.85-1.4-3.1t-3.3-1.25h-7.2Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().toggleItalic().run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('italic') }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M10 40v-5h6.85l8.9-22H18V8h20v5h-6.85l-8.9 22H30v5Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().toggleStrike().run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('strike') }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M25.2 40q-3.9 0-7.1-2.075-3.2-2.075-4.65-5.575l3.45-1.45q1 2.4 3.25 3.85 2.25 1.45 5.05 1.45 2.6 0 4.15-1.35 1.55-1.35 1.55-3.65 0-1.15-.475-2.425T29.1 26.5h4.2q.7 1.15 1.05 2.3.35 1.15.35 2.4 0 3.9-2.65 6.35Q29.4 40 25.2 40ZM4 23.5v-3h40v3ZM23.7 7.7q3.3 0 5.85 1.55t3.75 4.3l-3.45 1.55q-.7-1.7-2.325-2.65-1.625-.95-3.825-.95-2.45 0-3.95 1.2t-1.5 3.3q0 .4.05.75t.15.75h-3.7q-.1-.4-.15-.8-.05-.4-.05-.8 0-3.65 2.55-5.925T23.7 7.7Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().setParagraph().run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('paragraph') }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M18.5 40V27h-1q-3.95 0-6.725-2.775Q8 21.45 8 17.5q0-3.95 2.775-6.725Q13.55 8 17.5 8H36v3h-4.5v29h-3V11h-7v29Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('heading', { level: 1 }) }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M10 34V14h3v8.5h9V14h3v20h-3v-8.5h-9V34Zm25 0V17h-4v-3h7v20Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('heading', { level: 2 }) }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M6 34V14h3v8.5h9V14h3v20h-3v-8.5H9V34Zm21 0v-8.5q0-1.25.875-2.125T30 22.5h9V17H27v-3h12q1.25 0 2.125.875T42 17v5.5q0 1.25-.875 2.125T39 25.5h-9V31h12v3Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('heading', { level: 3 }) }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M6 34V14h3v8.5h9V14h3v20h-3v-8.5H9V34Zm21 0v-3h12v-5.5h-8v-3h8V17H27v-3h12q1.25 0 2.125.875T42 17v14q0 1.25-.875 2.125T39 34Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('heading', { level: 4 }) }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M6 34V14h3v8.5h9V14h3v20h-3v-8.5H9V34Zm31 0v-6.5H27V14h3v10.5h7V14h3v10.5h4v3h-4V34Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('heading', { level: 5 }) }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M6 34V14h3v8.5h9V14h3v20h-3v-8.5H9V34Zm21 0v-3h12v-5.5H27V14h15v3H30v5.5h9q1.25 0 2.125.875T42 25.5V31q0 1.25-.875 2.125T39 34Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('heading', { level: 6 }) }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M6 34V14h3v8.5h9V14h3v20h-3v-8.5H9V34Zm24 0q-1.25 0-2.125-.875T27 31V17q0-1.25.875-2.125T30 14h12v3H30v5.5h9q1.25 0 2.125.875T42 25.5V31q0 1.25-.875 2.125T39 34Zm0-8.5V31h9v-5.5Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().toggleBulletList().run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('bulletList') }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M8.55 39q-1.05 0-1.8-.725T6 36.55q0-1.05.75-1.8t1.8-.75q1 0 1.725.75.725.75.725 1.8 0 1-.725 1.725Q9.55 39 8.55 39ZM16 38v-3h26v3ZM8.55 26.5q-1.05 0-1.8-.725T6 24q0-1.05.75-1.775.75-.725 1.8-.725 1 0 1.725.75Q11 23 11 24t-.725 1.75q-.725.75-1.725.75Zm7.45-1v-3h26v3ZM8.5 14q-1.05 0-1.775-.725Q6 12.55 6 11.5q0-1.05.725-1.775Q7.45 9 8.5 9q1.05 0 1.775.725Q11 10.45 11 11.5q0 1.05-.725 1.775Q9.55 14 8.5 14Zm7.5-1v-3h26v3Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ '!bg-primary !bg-opacity-30 is-active': editor.isActive('orderedList') }">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M6 40v-1.7h4.2V37H8.1v-1.7h2.1V34H6v-1.7h5.9V40Zm10.45-2.45v-3H42v3ZM6 27.85v-1.6l3.75-4.4H6v-1.7h5.9v1.6l-3.8 4.4h3.8v1.7Zm10.45-2.45v-3H42v3ZM8.1 15.8V9.7H6V8h3.8v7.8Zm8.35-2.55v-3H42v3Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().setHorizontalRule().run()">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M4 34h4v1h-2v2h2v1h-4v2h6v-8h-6v2zm2-18h2v-8h-4v2h2v6zm-2 6h3.6l-3.6 4.2v1.8h6v-2h-3.6l3.6-4.2v-1.8h-6v2zm10-12v4h28v-4h-28zm0 28h28v-4h-28v4zm0-12h28v-4h-28v4z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().undo().run()">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M28.4 38H14v-3h14.45q3.5 0 6.025-2.325Q37 30.35 37 26.9t-2.525-5.775Q31.95 18.8 28.45 18.8H13.7l5.7 5.7-2.1 2.1L8 17.3 17.3 8l2.1 2.1-5.7 5.7h14.7q4.75 0 8.175 3.2Q40 22.2 40 26.9t-3.425 7.9Q33.15 38 28.4 38Z"/></svg>
        </button>
        <button class="w-8 h-8 rounded-md bg-gray-200 flex items-center justify-center" @click="editor.chain().focus().redo().run()">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 48 48" preserveAspectRatio="none"><path d="M19.6 38q-4.75 0-8.175-3.2Q8 31.6 8 26.9t3.425-7.9q3.425-3.2 8.175-3.2h14.7l-5.7-5.7L30.7 8l9.3 9.3-9.3 9.3-2.1-2.1 5.7-5.7H19.55q-3.5 0-6.025 2.325Q11 23.45 11 26.9t2.525 5.775Q16.05 35 19.55 35H34v3Z"/></svg>
        </button> 
    </div> -->
    <editor-content :editor="editor"/>
</template>
<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
export default {
    components: {
        EditorContent,
    },
    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            editor: null,
        }
    },
    emits: ['update:modelValue'],
    watch: {
        modelValue(value) {
            const isSame = this.editor.getHTML() === value
            if (isSame) {
                return
            }
            this.editor.commands.setContent(value, false)
            this.$emit('update:modelValue', this.editor.getHTML())
        },
    },
    mounted() {
        this.editor = new Editor({
            extensions: [
                StarterKit,
            ],
            content: this.modelValue,
            onUpdate: ({editor}) => {
                this.$emit('update:modelValue', editor.getHTML())
            },
        })
    },
    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>
<style>
/* Basic editor styles */
/* .ProseMirror > * + * { */
    /* margin-top: 0.75em; */
/* } */
.ProseMirror > h4{
    @apply text-base text-black;
}
.ProseMirror > h4:not(.ProseMirror > h4:first-child) {
    margin-top: 1em;
}

.ProseMirror > h6{
    @apply text-sm text-black;
    margin-top: 0.5em;
    margin-left: 0.5em;
}

.ProseMirror > p {
    @apply text-xs text-black;
    margin-left: 1em;
}

.ProseMirror code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
}
.content {
  padding: 1rem 0 0;
}
.content h3 {
    margin: 1rem 0 0.5rem;
}
.content pre {
    border-radius: 5px;
    color: #333;
}
.content code {
    display: block;
    white-space: pre-wrap;
    font-size: 0.8rem;
    padding: 0.75rem 1rem;
    background-color:#e9ecef;
    color: #495057;
}
.ProseMirror {
    @apply p-4 outline-none overflow-x-auto h-[48vh];
}
h1{
    @apply text-5xl font-medium
}
h2{
    @apply text-4xl font-medium
}
h3{
    @apply text-3xl font-medium
}
h4{
    @apply text-2xl font-medium
}
h5{
    @apply text-xl font-medium
}
h6{
    @apply text-base font-medium
}
</style>