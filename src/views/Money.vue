<template>
  <div class="money">
    <img alt="Vue logo" src="../assets/money.png" />
    <!-- <h2>{{ pageDescreption }}</h2> -->
    <hr />

    <div class="alert alert-primary" role="alert" v-text="alertText"></div>

    <div class="col-md-8">
      <div class="form-group row">
        <label for="hours" :class="labelStyle">Hours</label>
        <input
          type="text"
          v-model="hours"
          class="col-4 form-control"
          :onkeypress="number"
        />
      </div>
      <div class="form-group row">
        <label for="minutes" :class="labelStyle">Minutes</label>
        <input
          type="text"
          v-model="minutes"
          class="col-4 form-control"
          :onkeypress="number"
        />
      </div>
      <div class="form-group row">
        <label for="seconds" :class="labelStyle">Seconds</label>
        <input
          type="text"
          v-model="seconds"
          class="col-4 form-control"
          :onkeypress="number"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pageName: "Money",
      pageDescreption: "This is an Money page",
      alertText: "Calculate the Time",
      labelStyle: "col-2 text-left pt-1 text-dark font-weight-normal",
      number:
        "return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46",
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  watch: {
    hours: function(v) {
      this.minutes = v * 60;
    },
    minutes: function(v) {
      this.hours = v / 60;
      this.seconds = v * 60;
    },
    seconds: function(v) {
      this.minutes = v / 60;
    }
  },
  name: "Money"
};
</script>
