<slot/>

<style lang="scss" global>
@import 'fluid';
@import 'colors';

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

:root {
  font-family: 'Open Sans', sans-serif;
}

h1 {
  @include fluid(font-size, $very-small, $large, 24px, 38px ); 
}

*:focus {
  outline-style: solid;
  outline-color: $senary_color;
  @include fluid(outline-width, $very-small, $large, 1px, 2px ); 
}

body {
  margin: 0;
  background-color: $primary_color;
  background: linear-gradient(180deg, $primary_color, $secondary_color);
  min-height: 100vh;
  color: $ternary_color;
  box-sizing: border-box;
}

input {
  @include fluid(font-size, $very-small, $large, 12px, 18px ); 
  @include fluid(border-radius, $very-small, $large, 8px, 16px ); 
  @include fluid(padding, $very-small, $large, 4px, 10px ); 

  width: clamp(100px, 80% ,500px);
  text-align: center;
  border: 0;
  color: $quinary_color;

  &.big {
    @include fluid(font-size, $very-small, $large, 16px, 24px ); 
    @include fluid(border-radius, $very-small, $large, 10px, 15px ); 
    @include fluid(padding, $very-small, $large, 6px, 14px ); 
  }
}

button {
  @include fluid(font-size, $very-small, $large, 16px, 24px ); 
  @include fluid((padding-right, padding-left), $very-small, $large, 12px, 20px); 
  @include fluid((padding-top, padding-bottom), $very-small, $large, 6px, 10px); 
  @include fluid(border-radius, $very-small, $large, 8px, 12px ); 

  border: 0;
  color: $ternary_color;
  background-color: $senary_color;
  transition: color 200ms, transform 200ms, background-color 200ms;

  &:focus, &:hover {
    background-color: $ternary_color;
    color: $senary_color;
    transition: color 200ms, transform 200ms, background-color 200ms;
  }

  &:hover {
    cursor: pointer;
    transform: scale(0.9);
    transition: color 200ms, transform 200ms, background-color 200ms;
  }
}
</style>
