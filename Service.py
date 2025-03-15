# /services/ai_keyword_service.py
import requests
from pytrends.request import TrendReq

def fetch_trending_keywords(region="US", timeframe="now 1-d"):
    pytrend = TrendReq()
    trending_searches = pytrend.trending_searches(pn=region)
    # Return top 10 keywords
    return trending_searches[0].head(10).tolist()

if __name__ == "__main__":
    keywords = fetch_trending_keywords()
    print("Trending Keywords:", keywords)
