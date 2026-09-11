<template>
  <div>
    <!-- Form Inputs -->
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="number" v-model="age" placeholder="Enter Age" />
    <input type="text" v-model="course" placeholder="Enter Course" />

    <!-- Live Display -->
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Course: {{ course }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: null,
      course: ""
    };
  }
};
</script>
