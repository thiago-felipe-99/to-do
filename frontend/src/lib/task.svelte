<script lang="ts">
  export let id: string,
             title: string,
             description: string,
             redirect: string,
             done: boolean;

  const params = `noJS&redirect=${redirect}`;
  const apiURL = `/api/todo/${id}`;
</script>

<section class:done>
  <form class="big" action="{apiURL}?{params}&_method=patch" method="post">
    <input class="big" name="title" value={title} />
    <input name="description" value={description} />
    <button>change</button>
  </form>
  <form action="{apiURL}?{params}&_method=patch" method="post">
    <button>Toogle done</button>
  </form>
  <form action="{apiURL}?{params}&_method=delete" method="post">
    <button>delete</button>
  </form>
</section>

<style lang="scss">
@import 'fluid';
@import 'colors';

section {
  @include fluid(gap, $very-small, $large, 10px, 18px ); 

  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 700px;
  flex-grow: 1;
  width: 100%;
}

form {
  @include fluid(gap, $very-small, $large, 10px, 18px ); 

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &.big {
    grid-column: 1 / 3;
  }
}

input {
  width: clamp(100px, 80% ,500px);
}
</style>
