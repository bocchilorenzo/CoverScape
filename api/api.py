from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError
#from fastapi.middleware.cors import CORSMiddleware
from fastapi import Response
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
import requests
from os import environ
load_dotenv()

app = FastAPI()

""" app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_methods=['GET', 'OPTIONS'],
    allow_headers=['*']
) """

def set_headers(response: Response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "OPTIONS, GET"
    response.headers["Access-Control-Allow-Headers"] = "*"
    response.headers["Access-Control-Max-Age"] = "3600"

    return response


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse({'kind': 'Error', 'data': [], 'error_message': 'One or more parameters are empty or missing. Please check the request and try again.'}, status_code=400)


@app.get("/redditSearch")
def redditSearch(response: Response, q: str, after: str = ""):
    response = set_headers(response)

    r = requests.get('https://www.reddit.com/r/AlbumArtPorn/search.json?restrict_sr=true&q=' +
                     q+'&after='+after, headers={'User-agent': 'coverscape-backend'})
    return r.json()


@app.get("/redditPost")
def redditSearch(response: Response, id: str):
    response = set_headers(response)
    
    r = requests.get('https://www.reddit.com/'+id+'/.json',
                     headers={'User-agent': 'coverscape-backend'})
    return r.json()


@app.get("/lastfmSearch")
def lastfmSearch(response: Response, q: str, page: str = ""):
    response = set_headers(response)

    r = requests.get('https://ws.audioscrobbler.com/2.0?method=album.search&album=' +
                     q+'&format=json&page='+page+'&api_key='+environ.get("LASTFM_API"), headers={'User-agent': 'coverscape-backend'})
    return r.json()


@app.get("/lastfmAlbum")
def lastfmSearch(response: Response, title: str, artist: str, imgUrl: str):
    response = set_headers(response)

    return {"title": title, "artist": artist, "imgUrl": imgUrl}
