# Leftovers
Order home cooked meals from top in-house cooks!

## Docker

### Build
```
docker build -t leftovers-client .
```

### Run
```
docker run --name=client --network=leftovers-network --env-file .env -p 3000:3000 leftovers-client
```