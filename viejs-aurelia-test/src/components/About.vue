<template>
	<div id="about">
    <hr>
    <h1>{{ title }}</h1>
		<span>{{ text }}</span>

	</div>
</template>

<script>

export default {
  name: "about",
  data: () => ({
    title: "About",
    text: "hi, my name is abbi!"
  })
};
</script>

<style>
hr {
  border: coral 2px solid;
}
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
