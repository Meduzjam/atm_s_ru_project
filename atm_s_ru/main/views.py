from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.base import TemplateView
from .models import *

class HomePageView(TemplateView):

    template_name = "main/home.html"

    def get_context_data(self, **kwargs):
        context = super(HomePageView, self).get_context_data(**kwargs)
        #context['latest_articles'] = Article.objects.all()[:5]
        return context

class CustomersView(TemplateView):

    template_name = "main/customers.html"

    def get_context_data(self, **kwargs):
        context = super(CustomersView, self).get_context_data(**kwargs)
        #context['customers'] = Customers.objects.all()[:5]
        return context

class SertificatesView(TemplateView):

    template_name = "main/sertificates.html"

    def get_context_data(self, **kwargs):
        context = super(SertificatesView, self).get_context_data(**kwargs)
        #context['customers'] = Customers.objects.all()[:5]
        return context
