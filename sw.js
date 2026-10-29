// خدمة بسيطة حتى ينضاف التطبيق للشاشة الرئيسية.
// ما نخزّن بيانات الطلبات؛ بس صفحة احتياطية إذا انقطع النت.
const OFFLINE = "<!doctype html><html lang='ar' dir='rtl'><meta charset='utf-8'><meta name='viewport' content='width=device-width'>" +
  "<body style='font-family:system-ui;text-align:center;padding:48px 16px;background:#F5F8F6;color:#10201C'>" +
  "<h1 style='color:#0F5C4D'>شروة</h1><p>ماكو اتصال بالإنترنت. تأكد من الشبكة وحاول مرة ثانية.</p></body></html>";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(fetch(e.request).catch(() => new Response(OFFLINE, { headers: { "Content-Type": "text/html; charset=utf-8" } })));
});
