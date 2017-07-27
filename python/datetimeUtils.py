from datetime import datetime
import traceback

import logging
logger = logging.getLogger(__name__)

def getDatetimeByTimestamp(timestamp):
  result = None
  try:
    result = datetime.fromtimestamp(timestamp)
  except Exception as e:
    logger.error(traceback.format_exc())
  return result

def getDatetimeByJsonStr(jsonStr):
  result = None
  try: 
    result = datetime.strptime(jsonStr, '%Y-%m-%dT%H:%M:%S.%fZ')
  except Exception as e:
    logger.error(traceback.format_exc())
  return result

def timeDiff(start, end):
  try:
    return end - start
  except:
    logger.error(traceback.format_exc())
    return None

def checkSameDay(time1, time2):
  try:
    return time1.date() == time2.date()
  except:
    logger.error(traceback.format_exc())
    return False
