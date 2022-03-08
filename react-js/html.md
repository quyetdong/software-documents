# Plain HTML
  * To prevent the default link behavior of element <a> (redirect to the link inside href), can use return false
    ```
    <a href="https://www.google.com" onclick="console.log('The link was clicked'); return false">
      Click me
    </a>
    ```
  * To prevent the default form behavior of submitting, you can write
    ```
    <form onsubmit="console.log('You clicked submit.'); return false">
      <button type="submit">Submit</button>
    </form>
    ```

# 
