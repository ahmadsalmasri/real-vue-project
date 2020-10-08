<template>
	<div class="header">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/help">Help</router-link> |
			<router-link to="/money">Money</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "AppNavbar",
};
</script>
