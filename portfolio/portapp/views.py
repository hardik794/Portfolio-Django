from django.shortcuts import render
from .models import BasicDetails ,Resume ,Education,Skills,Experiences,Projects,Softwares

def portfolio(req):
    details=BasicDetails.objects.all()
    resume=Resume.objects.all()
    education=Education.objects.all()
    experiences=Experiences.objects.all()
    projects=Projects.objects.all()
    softwares=Softwares.objects.all()
    skills=Skills.objects.all()

    return render(req, 'index.html',{'details':details,'resume':resume,'education':education,'experiences':experiences,'projects':projects,'softwares':softwares,'skills':skills})