from django.conf.urls import url,include
from tastypie.api import Api
from .rest import *

v1_api = Api(api_name='v1')
v1_api.register(SertificateTypesResource())
v1_api.register(SertificatesResource())

urlpatterns = [
    url(r'^api/', include(v1_api.urls)),
    ]