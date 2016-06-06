from tastypie.resources import ModelResource
from atm_s_ru.main.models import Sertificates, SertificateTypes
from tastypie.api import Api
from tastypie import fields

class SertificateTypesResource(ModelResource):
    class Meta:
        queryset = SertificateTypes.objects.all()
        resource_name = 'sertificatetypes'
        fields = ['Name']
        allowed_methods = ['get']
        include_resource_uri = False

    def dehydrate(self, bundle):
        return bundle.data['Name']

class SertificatesResource(ModelResource):
    Type = fields.ForeignKey(SertificateTypesResource, 'Type', full=True)
    class Meta:
        queryset = Sertificates.objects.all()
        resource_name = 'sertificates'
        #fields = ['id','Title','Type','File']
        fields = ['id','Title','Type','File']
        allowed_methods = ['get']
        include_resource_uri = False


