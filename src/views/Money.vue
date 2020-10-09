<template>
  <div class="money">
    <h2>{{ pageDescreption }}</h2><hr />

    <div class="alert alert-primary" role="alert">
      This is a primary alert—check it out!
    </div>
    <div class="form-group row">
       <label class="col-2">Hours</label>
       <input type="text" v-model="hours" />
    </div>
    <div class="form-group row">
       <label class="col-2">Minutes</label>
       <input type="text" v-model="minutes" />
    </div>
    <div class="form-group row">
       <label class="col-2">Seconds</label>
       <input type="text" v-model="seconds" />
    </div>

  </div>
</template>

<script>
export default {
        data: function() {
        return {
            pageName: "Money",
            pageDescreption: "This is an Money page",
        }
    },
  name: "Money"
};
</script> 