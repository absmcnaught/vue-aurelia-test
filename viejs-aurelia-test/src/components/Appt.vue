<template>
	<div id="app">
    <h1>{{ title }}</h1>
    <textarea rows="10" v-model="text"></textarea>
    <br>
		<text-reader @load="text = $event"></text-reader>

    <footer>{{ reference }}</footer>
	</div>
</template>

<script>
import TextReader from "./TextReader.vue";

export default {
  name: "appt",
  data: () => ({
    title: "File Reader",
    text: "",
    reference: "https://codesandbox.io/s/4p0k1xly4?file=/index.js" }),
  components: {
    TextReader
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
