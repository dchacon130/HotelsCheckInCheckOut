from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from api import views 

router = routers.DefaultRouter()
router.register(r'reservation', views.ReservationView, 'reservation')

urlpatterns = [
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='Reservation API'))
]