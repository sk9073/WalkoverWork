
from selenium import webdriver
import time

driver = webdriver.Chrome("C:\\Users\\legion\\Desktop\\chromedriver.exe")

driver.get("http://localhost:3000/contact/contact")
time.sleep(3)
driver.maximize_window()
time.sleep(3)
driver.find_element_by_id("htc").click()