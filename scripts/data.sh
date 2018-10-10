#!/bin/bash

if [ $# -eq 0 ]
then
	echo ""
	echo "usage: data.sh http | curl"
	echo ""
	echo "for example:"
	echo "	$0 curl -X POST http://localhost:3000/http/post -H \"Accept: application/json\""
	echo " 	$0 curl -X POST http://localhost:3000/http/post -H \"Accept: application/json\" --data '{id: 4, body: \"this is from curl - 4\", title: \"title post - 3\", userId: 4}'"
 	echo "	$0 curl -X PUT http://localhost:3000/http/put/1 -H \"Accept: application/json\" --data '{id: 4, body: \"this is from curl - 4\", title: \"title post - 4\", userId: 4}'"
	echo "	$0 http POST http://localhost:3000/http/post"	
	echo ""
	exit
fi

if [ $1 = 'http' ]; then
	shift
	http $*
fi

if [ $1 = 'curl' ]; then
	shift
	curl $*
fi
