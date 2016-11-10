# React Server-Side Rendering Demo in Moqui

This demo depends on:    
- [Moqui Framework](https://github.com/moqui/moqui-framework)
- [Moqui Runtime](https://github.com/moqui/moqui-runtime)
- [Moqui React SSR Add-on](https://github.com/shendepu/moqui-react-ssr)


## Set up demo
```bash
git clone https://github.com/moqui/moqui-framework .
cd moqui-framework
./gradlew getRuntime
                                                                                                     
git clone https://github.com/shendepu/moqui-react-ssr.git runtime/component/moqui-react-ssr
git clone https://github.com/shendepu/moqui-react-ssr-demo.git runtime/component/moqui-react-ssr-demo
gradle build cleanAll load run
```

## Run demo 

Access [http://localhost:8080/apps/react-ssr-demo/counter](http://localhost:8080/apps/react-ssr-demo/counter)

The html file from server contains server rendered html and initial state for redux store.

```html
<!doctype html>
<html>
<head><title>React Redux Starter Kit</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="shortcut icon" href="/apps/react-ssr-demo/dist/favicon.ico">
    <link href="/apps/react-ssr-demo/dist/app.10e96fd5de5ace2c63d2d76d0f6b34d0.css" rel="stylesheet">
</head>
<body>
    <script>
        window.___INITIAL_STATE__ = {"location":null,"counter":5.0};
        window.__APP_BASE_PATH__ = '/apps/react-ssr-demo';
    </script>

    <div id="root" style="height: 100%"><div class="container text-center" data-reactroot="" data-reactid="1" data-react-checksum="-867560290"><div data-reactid="2"><h1 data-reactid="3">React Redux Starter Kit</h1><a href="/apps/react-ssr-demo/" class="route--active" data-reactid="4">Home</a><!-- react-text: 5 --> · <!-- /react-text --><a href="/apps/react-ssr-demo/counter" class="route--active" data-reactid="6">Counter</a></div><div class="core-layout__viewport" data-reactid="7"><!-- react-empty: 8 --><!-- react-empty: 9 --><!-- react-empty: 10 --><div style="margin:0 auto;" data-reactid="11"><h2 data-reactid="12"><!-- react-text: 13 -->Counter: <!-- /react-text --><!-- react-text: 14 -->5<!-- /react-text --></h2><button class="btn btn-default" data-reactid="15">Increment</button><!-- react-text: 16 --> <!-- /react-text --><button class="btn btn-default" data-reactid="17">Double (Async)</button></div></div></div></div>
    <script type="text/javascript" src="/apps/react-ssr-demo/dist/vendor.26d36bc20bb547318e77.js"></script>
    <script type="text/javascript" src="/apps/react-ssr-demo/dist/app.dfe510e99029dd57fdaa.js"></script>
</body>
</html>
```

# License

Moqui React SSR Demo is [CC0-licensed](./LICENSE.md). we also provide an addition [copyright and patent grant](./AUTHORS) 