docker stop nickchubb.ca
docker rm nickchubb.ca
docker build -t nchubb/nickchubb.ca .
docker run --restart unless-stopped --name nickchubb.ca -p 4004:3000 -v db:/usr/src/app/data -d nchubb/nickchubb.ca
