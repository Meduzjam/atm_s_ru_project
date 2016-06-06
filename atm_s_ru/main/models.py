from django.db import models
from django.utils import timezone
from model_utils.models import TimeStampedModel

class Customers(TimeStampedModel):
	"""Модель для заказчика"""
	class Meta:
		db_table = 'customers'
		verbose_name = 'заказчик'
		verbose_name_plural = 'заказчики'

	Name = models.CharField(max_length=200,
							verbose_name='Название',
							unique=True)

	Description = models.TextField(max_length=1200,
							verbose_name='Описание',
							blank=True)

	URL = models.CharField(max_length=200,
							verbose_name='Web сайт',
							blank=True)

	Logo = models.ImageField(verbose_name='Логотип',
							blank=True)

	def __str__(self):
		return self.Name
		
class Projects(TimeStampedModel):
	"""Модель для проекта"""
	class Meta:
		db_table = 'projects'
		verbose_name = 'проект'
		verbose_name_plural = 'проекты'

	Name = models.CharField(max_length=200, 
							verbose_name='Название',
							unique=True)

	Description = models.TextField(max_length=1200, 
							verbose_name='Описание', 
							blank=True)

	Date = models.DateField(verbose_name='Дата завершения',
							blank=True)

	Customer = models.ForeignKey(Customers, 
							verbose_name='Заказчик',
							on_delete=models.CASCADE)

	def __str__(self):
		return self.Name

class SertificateTypes(TimeStampedModel):
	"""Модель для типа сертификата"""
	class Meta:
		db_table = 'sertificate_types'
		verbose_name = 'тип сертификата'
		verbose_name_plural = 'типы сертификатов'

	Name = models.CharField(max_length=200, 
							verbose_name='Название',
							unique=True)

	Description = models.TextField(max_length=1200,
							verbose_name='Описание',
							blank=True)
	
	def __str__(self):
		return self.Name

class Sertificates(TimeStampedModel):
	"""Модель для сертификата"""
	class Meta:
		db_table = 'sertificates'
		verbose_name = 'сертификат'
		verbose_name_plural = 'сертификаты'

	Type = models.ForeignKey(SertificateTypes,
								verbose_name='Тип',
								on_delete=models.CASCADE)

	Title = models.CharField(max_length=200,
							 verbose_name='Заголовок',
							 unique=True)

	Description = models.TextField(max_length=1200, 
									verbose_name='Описание', 
									blank=True)

	File = models.FileField(verbose_name='Файл',
							blank=True,  
	 						upload_to='sertificates/')

	Active = models.BooleanField(verbose_name='Активен')

	def __str__(self):
		return self.Title
