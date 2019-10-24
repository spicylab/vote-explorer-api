# vote-explorer-api

Simple API server for inspect realtime vote data on blockchain.

## Get Single Mob Vote Status
```
GET /vote/mob/:id
```
__Response__
```
{
  "strength": 0,
  "rewards": 0,
  "totalVotes": 10
}
```

## Get Single Item Vote Status
```
GET /vote/item/:id
```
__Response__
```
{
  "strength": 0,
  "totalVotes": 10
}
```
