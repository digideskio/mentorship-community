"""URLs for the custom_auth app."""
from django.conf.urls import url
from django.views import generic


urlpatterns = [
    url(r'^(?P<key>\w+)/$',
        generic.TemplateView.as_view(template_name='index.html')),
]
