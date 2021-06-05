from django.contrib import admin

# Register your models here.
from .models import BasicDetails,OtherDetail ,Resume ,Education,Skills,Experiences,Projects,Softwares
admin.site.register(BasicDetails)
admin.site.register(OtherDetail)
admin.site.register(Resume)
admin.site.register(Education)
admin.site.register(Skills)
admin.site.register(Experiences)
admin.site.register(Projects)
admin.site.register(Softwares)
