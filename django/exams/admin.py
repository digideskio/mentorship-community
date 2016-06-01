from django.contrib import admin

from . import models


class ExamAdmin(admin.ModelAdmin):
    model = models.Exam


class AnswerInline(admin.TabularInline):
    model = models.Answer


class QuestionAdmin(admin.ModelAdmin):
    model = models.Question
    inlines = [AnswerInline, ]


admin.site.register(models.Exam, ExamAdmin)
admin.site.register(models.Question, QuestionAdmin)
# admin.site.register(models.Answer, AnswerAdmin)
