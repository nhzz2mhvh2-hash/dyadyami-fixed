from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto('http://localhost:3000/wizard')
    page.wait_for_timeout(5000)
    print(f"Doha found: {'Doha' in page.content()}")
    if 'Doha' not in page.content():
        print("Page content snippet:", page.content()[:1000])
    browser.close()
