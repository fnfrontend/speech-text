<template>
<div style="overflow: hidden;" class="h-screen font-sans text-gray-900 bg-gray-300 border-box p-4">
    <div class="flex relative justify-center w-full mx-auto max-w-[800px] min-h-[600px]">  
        <div v-if="selectedStep == 0" class="flex flex-col items-center justify-center w-full h-auto p-4 my-20 bg-white w-full sm:rounded-lg sm:shadow-xl">
            <div class="my-4 text-center">
                <h2 class="text-2xl font-semibold mb-2">Upload your files (Test Mode.)</h2>
                <p class="text-xs text-gray-500">File should be of format .m4a, .mp3, .webm, .mp4, .mpga, .wav or .mpeg</p>
            </div>
            <div class="relative !w-full h-full my-4 bg-gray-100 rounded-lg shadow-inner">
              <FileSelector
              v-model="audio_file"
              accept-extensions=".m4a,.mp3,.webm,.mp4,.mpga,.wav,.mpeg"
              @changed="handleFile">
                  <label class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                      <p class="z-10 text-xs font-light text-center text-gray-500">Drag & Drop your files here</p>
                      <svg class="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                      </svg>
                  </label>
                </FileSelector>
            </div>
            <div v-if="audio_file" class="w-full my-2 flex justify-between border-b-1 px-2 border text-xs py-2">
                <div class="flex items-center">
                <span class="mr-1">
                <svg width="12" height="17" viewBox="0 0 15 17" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.48 16.0017H4.28895C3.96403 16.0014 3.65252 15.8872 3.42277 15.6842C3.19302 15.4811 3.0638 15.2058 3.06348 14.9187V11.6695H4.28895V14.9187H13.48V3.00494H7.96537V1.92188H13.48C13.8049 1.92216 14.1164 2.03636 14.3462 2.23941C14.5759 2.44247 14.7051 2.71778 14.7055 3.00494V14.9187C14.7051 15.2058 14.5759 15.4811 14.3462 15.6842C14.1164 15.8872 13.8049 16.0014 13.48 16.0017Z"
                        fill="#6B7285"
                    />
                    <path
                        d="M7.96557 5.17015H12.2547V6.25322H7.96557V5.17015ZM7.35284 7.87782H12.2547V8.96089H7.35284V7.87782ZM6.7401 10.5855H12.2547V11.6685H6.7401V10.5855ZM3.06368 10.044C2.25139 10.0432 1.4726 9.75773 0.898227 9.2501C0.323851 8.74247 0.000811074 8.05418 0 7.33629V1.37942H1.22547V7.33629C1.22547 7.76716 1.41914 8.18038 1.76387 8.48505C2.1086 8.78972 2.57616 8.96089 3.06368 8.96089C3.55121 8.96089 4.01876 8.78972 4.36349 8.48505C4.70822 8.18038 4.90189 7.76716 4.90189 7.33629V2.46249C4.90189 2.31887 4.83733 2.18113 4.72242 2.07957C4.60751 1.97801 4.45166 1.92096 4.28915 1.92096C4.12665 1.92096 3.97079 1.97801 3.85588 2.07957C3.74097 2.18113 3.67642 2.31887 3.67642 2.46249V7.87782H2.45095V2.46249C2.45095 2.03162 2.64461 1.6184 2.98934 1.31372C3.33408 1.00905 3.80163 0.837891 4.28915 0.837891C4.77668 0.837891 5.24423 1.00905 5.58896 1.31372C5.9337 1.6184 6.12736 2.03162 6.12736 2.46249V7.33629C6.12655 8.05418 5.80351 8.74247 5.22914 9.2501C4.65476 9.75773 3.87597 10.0432 3.06368 10.044Z"
                        fill="#6B7285"
                    />
                </svg>
            </span>
            <span class="font-medium text-xs">{{audio_file?.name}}</span>
            </div>
                <button class="font-bold text-[10px] text-[#63718C] pointer" @click="handleFileDelete">Remove</button>
            </div>
            <div class="w-full flex justify-center flex-wrap md:flex-nowrap">
              <button @click="prevPage" type="button" class="md:w-auto w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Back</button>
              <button @click="getTranscription" type="button" class="order-first md:order-none md:w-auto w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Next</button>
              <router-link to="/" class="md:absolute text-center md:w-auto w-full right-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Main Version</router-link>
            </div>
          </div>
        <div v-if="selectedStep == 1" class="flex flex-col items-center justify-center w-full h-auto p-4 my-20 bg-white w-full sm:rounded-lg sm:shadow-xl">
            <div class="my-4 text-center">
                <h2 class="text-2xl font-semibold mb-2">Transcription:</h2>
                <p class="text-xs text-gray-500">Edit and Submit Your Text</p>
            </div>
            <div class="relative !w-full h-full my-4 bg-gray-100 rounded-lg shadow-inner">
                <textarea v-model="transcript" class="bg-gray-100 h-full w-full outline-none shadow-inner p-2 rounded-lg resize-none text-xs text-gray-500"></textarea>
            </div>
            <div class="flex">
              <button @click="prevPage" type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Back</button>
              <button @click="getResult" type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Next</button>
            </div>
          </div>
        <div v-if="selectedStep == 2" class="flex flex-col items-center justify-center w-full h-auto p-4 my-20 bg-white w-full sm:rounded-lg sm:shadow-xl">
            <div class="my-4 text-center">
                <h2 class="text-2xl font-semibold mb-2">Result:</h2>
            </div>
            <div class="relative !w-full h-full my-4 bg-white bg-gray-100 rounded-lg shadow-inner">
                <!-- <textarea v-model="result" class="bg-gray-100 h-full w-full outline-none shadow-inner p-2 rounded-lg resize-none text-xs text-gray-500"></textarea> -->
                <RichTextEditer :class="'bg-gray-100 h-full w-full shadow-inner rounded-lg text-gray-500'" v-model="result"></RichTextEditer>
              </div>
            <button @click="selectedStep = 0" type="button" class="block w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Back to start</button>
          </div>
    </div>
    <div v-if="loading" class="absolute flex h-screen items-center justify-center bg-[#0000007a] text-white top-0 w-full z-20">
      <div class="flex items-center gap-2  px-3 py-2 font-medium leading-none text-center bg-gray-900 rounded-full animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-repeat animate-spin" viewBox="0 0 16 16">
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
          <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
        </svg>
        <span class="text-sm">Processing..</span>
      </div>
    </div>
</div>
</template>
<script>
import axios from "axios";
import fs from "fs";
import RichTextEditer from './RichTextEditer.vue';
const OPENAI_API_KEY = "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";
// const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export default {
  data() {
    return {
      loading: false,
      selectedStep:0,
      audio_file: null,
      transcript: '',
      result: '',
    }
  },
  components:{
      RichTextEditer,
    },
  methods: {
    handleFile(files) {
      this.audio_file = files[0];
    },
    handleFileDelete() {
      this.audio_file = null;
    },
    prevPage() {
      if (this.selectedStep > 0) {
        this.selectedStep--;
      }
    },
    async getTranscription() {
      if (this.audio_file) {
        this.loading = true;
        let formData = new FormData()
        formData.append("file", this.audio_file)
        formData.append("model", "whisper-1")
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
        };
        await axios.post('https://api.openai.com/v1/audio/transcriptions', formData, config).then((response) => {
          this.transcript = response.data.text;
          this.loading = false;
          this.audio_file = null;
          this.selectedStep++;
        }).catch((error) => {
           console.log(error);
          this.loading = false;
          this.audio_file = null;
          this.$notify({"title":error,"type":"error"});
        });
      } else {
        this.$notify({"title":"Please select your audio first.","type":"error"});
      }
    },
    async getResult() {
      if (this.transcript != '') {
        this.loading = true;
        let data = {
          "transcript" : this.transcript,
        }
        const headers = {
            headers: { Authorization: `Bearer ${OPENAI_API_KEY}` }
        };
        await axios.post('https://life-medizen-api.azurewebsites.net/', data, headers).then(response => {
          this.result = response.data;
          this.loading = false;
          this.transcript = "";
          this.selectedStep++;
        }).catch(error => {
          console.log(error);
          this.transcript = "";
          this.loading = false;
          this.$notify({"title":error,"type":"error"});
        });
      } else {
        this.$notify({"title":"Transcript field can't be empty.","type":"error"});
      }
    }
  }
}
</script>
<style>
.fs-file-selector,
.fs-droppable,
.fs-btn-select {
    @apply !h-full !w-full
}
</style>