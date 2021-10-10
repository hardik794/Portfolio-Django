from django.shortcuts import render
from .models import BasicDetails,OtherDetail ,Resume ,Education,Skills,Experiences,Projects,Softwares
from datetime import date, timedelta

def portfolio(req):
    details=BasicDetails.objects.all()
    otherdetails=OtherDetail.objects.all()
    resume=Resume.objects.all()
    education=Education.objects.all()
    experiences=Experiences.objects.all()
    projects=Projects.objects.all()
    softwares=Softwares.objects.all()
    skills=Skills.objects.all()

    data = BasicDetails.objects.get(id=1)
    date_birth=data.BirthDate
    age = (date.today() - date_birth) // timedelta(days=365.2425)

    context={
        'details':details,
        'otherdetails':otherdetails,
        'resume':resume,
        'education':education,
        'experiences':experiences,
        'projects':projects,
        'softwares':softwares,
        'skills':skills,
        'age':age
    }
    return render(req, 'index.html',context)