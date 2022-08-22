[Deployed project link](https://main.d3rvdhjdqtm61g.amplifyapp.com/)

![image](https://user-images.githubusercontent.com/80424496/185694512-94bfcdf1-36f1-4e6e-92a0-7ca1ece48255.png)


<br>

# Notes 

<br>
API <br>
https://www.coingecko.com/en/api <br>
/coins/markets

```
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
```

https://ant.design/components/table/

https://codesandbox.io/s/9235px9x3w?file=/src/index.tsx

ESLint warnings, how to disable for all Result file ? <br>
Does Api call function have to contain setSomething(blabla)  ? <br>

something is weird in sorting of change percentages also $ signs and colors will be added later<br>
```
If componentDidMount() is used with useState hook in function component, it renders twice.
That will cause performance loss and Class Component and setState is better choice.
```
```
The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the Route path. Child routes inherit all params from their parent routes.
```
Is something wrong to define empty state inside class component ?? <br>

```
setParam(blabla) and also function(param) cant be used inside same function. set method needs time I guess.
```
In React, HTML style prop value must be object, so it is object inside JSX.
```
(value >=0 ) ? <p style={{color:"green"}} > {value + "%" } </p> :
                        <p style={{color:"red"}} > { value + "%" } </p> ;
```
