posthog.capture('marketing_page_view');

document.querySelectorAll('.hero-cta').forEach(function(cta) {
  cta.addEventListener('click', function() {
    posthog.capture('cta_click', { target: 'try_demo' });
  });
});

document.querySelectorAll('.hero-badges a').forEach(function(link) {
  link.addEventListener('click', function() {
    var href = this.getAttribute('href');
    var target = 'unknown';
    if (href.includes('apps.apple.com')) {
      target = 'app_store_ios';
    } else if (href.includes('play.google.com')) {
      target = 'app_store_android';
    }
    posthog.capture('cta_click', { target: target });
  });
});