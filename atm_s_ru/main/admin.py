from django.contrib import admin
from .models import *

class SertificatesAdmin(admin.ModelAdmin):
	list_display = ("Title","Type", "Active","File")

admin.site.register(Customers)
admin.site.register(Projects)
admin.site.register(SertificateTypes)
admin.site.register(Sertificates,SertificatesAdmin)