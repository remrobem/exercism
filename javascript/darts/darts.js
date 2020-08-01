// https://en.wikipedia.org/wiki/Cartesian_coordinate_system#:~:text=Cartesian%20coordinate%20system%20with%20a,and%20r%20is%20the%20radius.

export const score = (x,y) => {
    const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if ( radius > 10) {
      return 0;
    }
    if ( radius > 5 ) {
      return 1;
    }
    if ( radius > 1 ) {
      return 5;
    }
    return 10;
  };
