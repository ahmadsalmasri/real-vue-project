<template>
  <div class="money">
    <h2>This is an Money Page</h2><hr />
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
  name: "Money"
};
</script> 