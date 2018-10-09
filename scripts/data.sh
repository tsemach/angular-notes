#!/bin/bash

if [ $# -eq 0 ]
then
	echo ""
	echo "usage: data.sh http | curl"
	echo ""
	echo "for example:"
	echo "	data.sh curl -X POST http://localhost:3000/http/post -H Accept: application/json"
	echo "	http POST http://localhost:3000/http/post"	
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
