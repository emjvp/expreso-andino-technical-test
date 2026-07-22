from django.contrib import admin

from .models import Shipment, TrackingEvent

admin.site.register(Shipment)
admin.site.register(TrackingEvent)
