# Angular Notes Application

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

```bash
ng build --prod --base-href /angular-notes/
```

Checking using nginx
````bash
export dist=${project-dir}/dist
docker stop nginx ;  docker rm nginx
docker run --name nginx -p 8081:80 -v ${dist}:/usr/share/nginx/html:ro -d nginx
````bash
