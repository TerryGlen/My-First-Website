from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.post_list, name='post_list'),
    url(r'^post/(?P<pk>\d+)/$', views.post_detail, name='post_detail'),
    url(r'^test$', views.test, name='test'),
    url(r'^diceroller$', views.diceroller, name='diceroller'),
    url(r'^blog$', views.post_list, name='post_list'),
]