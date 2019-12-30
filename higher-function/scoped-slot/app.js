var TodoList = {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
      <template v-for="todo in todos">
        <!-- v-bindディレクティブでtodoを親コンポーネントに渡す -->
        <slot :todo="todo">
          <li :key="todo.id">
            {{todo.text}}
          </li>
        </slot>
      </template>
    </ul>
  `
};

new Vue({
    el: "#app",
    data: function() {
        return {
            todos: [
                { id: 1, text: "C++", isCompleted: true },
                { id: 2, text: "Java", isCompleted: false },
                { id: 3, text: "Perl", isCompleted: true }
            ]
        };
    },
    components: {
        TodoList: TodoList
    }
});