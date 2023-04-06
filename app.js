function is_palindrome(params) {
    / your code here /
      if (typeof params != 'number' || params < 0) {
          console.log('Tham số không hợp lệ');
          return;
      }
      
      let str = params.toString();
      let revrese_number = parseInt(str.split('').reverse().join(''));
      if (params == revrese_number) {
          return true;
      }
      else {
          return false;
      }
      /*
      console.log(str.split(''));
      console.log(str.split('').reverse());
      console.log(str.split('').reverse().join(''));
      */
  }
  console.log(is_palindrome(1312));
  