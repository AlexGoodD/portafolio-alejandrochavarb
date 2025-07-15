<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <p>{{ todo.title }}</p>
      <p>
        <sub>completed: {{ todo.completed }}</sub>
      </p>
      <br />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "vuefire";
import { firebaseApp } from "@/main";

const db = getFirestore(firebaseApp);
const todos = useCollection(collection(db, "todos"));
</script>